import Viewer from "viewerjs";

const viewer = new Viewer(document.getElementById('image'), {
    inline: false,
    viewed() {
        viewer.zoomTo(0.3);
    },
});