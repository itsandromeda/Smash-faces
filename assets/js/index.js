const render = (root, points) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header(_ => render(root)));
    root.append(wrapper);
}

const state = {
    coders: null,
    sede: null,
    selectedCoder: null,
    points: 0,
    attempts: 5
};

$(_ => {
    const root = $('.root');
    render(root);
});