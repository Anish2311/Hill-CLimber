const pane = new Tweakpane.Pane({
    container: document.getElementById('tweakContainer')
})
// pane.classList.add('.tp')
const PARAMS = {
    bumpiness : 1,
    mass : 1,
    speed : 2,
    Ball: '#4c67a8',
    Background: '#000a1b',
    Ground: '#0a2645',
}

const f = pane.addFolder({
    title: 'Features',
    expanded: true,
})
f.addInput(
    PARAMS, 'bumpiness',
    {min: 1, max: 10, step: 1}
);
f.addInput(
    PARAMS, 'mass',
    {min: 1, max: 10, step: 1}
);
f.addInput(
    PARAMS, 'speed',
    {min: 1, max: 20, step: 1}
);

const c = pane.addFolder({
    title: 'Colours',
    expanded: true
})
c.addInput(
    PARAMS, 'Ball',
)
c.addInput(
    PARAMS, 'Background',
)
c.addInput(
    PARAMS, 'Ground',
)

