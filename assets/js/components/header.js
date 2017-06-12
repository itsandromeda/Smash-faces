const Header = (update) => {
    const main = $("<div></div>"),
        subwrapper = $("<div></div>"),
        label = $('<label for="select">Elige tu Sede: </label>'),
        select = $('<select></select>'),
        option = $('<option value="" hidden>Elige una opción</option>'),
        option1 = $('<option value="peru">Peru</option>'),
        option2 = $('<option value="chile">Chile</option>'),
        optionsWrapper = $('<div></div>'),
        span = $('<span>Puntos: </span>'),
        points = $("<span>" + state.points + "</span>"),
        game = $('<div class="game"></div>');

    optionsWrapper.append(span);
    optionsWrapper.append(points);

    select.append(option);
    select.append(option1);
    select.append(option2);

    subwrapper.append(label);
    subwrapper.append(select);

    main.append(subwrapper);
    main.append(optionsWrapper);
    main.append(game);

    select.on('change', (e) => {
        state.sede = select.val();
        state.points = 0;
        state.attempts = 5;
    });

    return main;
}