import * as hand from '@tensorflow-models/hand-pose-detection'
(async () => {
    const detector = await hand.createDetector(
        hand.SupportedModels.MediaPipeHands,
        {
            runtime: 'mediapipe',
            maxHands: 2,
            modelType: 'full',
            solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands'
        }
    );
    const video = document.createElement('video');
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('area');
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: 'user'
        }
    });
    video.srcObject = stream
    await video.play();
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth
    const gu = new Image();
    gu.src = new URL('../assets/gu.png', import.meta.url);
    await new Promise((resolve) => {
        gu.addEventListener('load', resolve);
    });
    const choki = new Image();
    choki.src = new URL('../assets/choki.png', import.meta.url);
    await new Promise((resolve) => {
        choki.addEventListener('load', resolve);
    });
    const pa = new Image();
    pa.src = new URL('../assets/pa.png', import.meta.url);
    await new Promise((resolve) => {
        pa.addEventListener('load', resolve);
    });
    const run = async () => {
        /** @type{CanvasRenderingContext2D} */
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        detector.estimateHands(video, { flipHorizontal: false }).then((hands) => {
            if (typeof hands[0] !== 'object') return
            let xlist = {}
            let ylist = {}
            hands[0].keypoints.forEach((keyp) => {
                if (!keyp.name) return
                xlist[keyp.name] = keyp.x
                ylist[keyp.name] = keyp.y
            });
            const upFinger = [
                xlist.thumb_ip ? (xlist.thumb_ip < xlist.thumb_tip ?? 0) : false,
                ylist.index_finger_pip ? (ylist.index_finger_pip > ylist.index_finger_tip ?? 0) : false,
                ylist.middle_finger_pip ? (ylist.middle_finger_pip > ylist.middle_finger_tip ?? 0) : false,
                ylist.ring_finger_pip ? (ylist.ring_finger_pip > ylist.ring_finger_tip ?? 0) : false,
                ylist.pinky_finger_pip ? (ylist.pinky_finger_pip > ylist.pinky_finger_tip ?? 0) : false
            ]
            if (!upFinger.slice(1).includes(false)) {
                ctx.drawImage(choki, 0, 0);
            } else if (upFinger[1] && upFinger[2]) {
                ctx.drawImage(gu, 0, 0);
            } else if (!upFinger.slice(1).includes(true)) {
                ctx.drawImage(pa, 0, 0);
            }
        }).catch(alert);
        requestAnimationFrame(run);
    }
    run();
})();