let PromisedWay = (function() {
    let $r = $('#r3')
    let $template = $(`<div class='col'><pre><code></code></pre></div><br>`);

    $.getJSON('/jsons/emp.json').then(function (d1) {
        const $t1 = $template.clone();
        $($t1[0]).prepend('Got emp.json')
        $t1.find('code').append(`${JSON.stringify(d1, null, 2)}`)
        $r.append($t1);

        return $.getJSON('/jsons/projects.json')
    })
    .then(function (d2) {
        const $t2 = $template.clone();
        $t2.prepend('Got projects.json')
        $t2.find('code').append(`${JSON.stringify(d2, null, 2)}`)
        $r.append($t2);

        return $.getJSON('/jsons/skills.json')
    })
    .then(function (d3) {
        const $t3 = $template.clone();
        $t3.prepend('Got skills.json')
        $t3.find('code').append(`${JSON.stringify(d3, null, 2)}`)
        $r.append($t3);

    },function (err) {
        const $t = this.$template.clone();
        $t.find('code').append(`${err}`);
        $r.append($t);
    });
})();
