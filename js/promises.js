let PromisedWay = (function () {
    let $r = $('#r3')
    let $template = $(`<div class='col'><pre><code></code></pre></div><br>`);

    $.getJSON('./jsons/emp.json').then(function (d1) {
        const $t1 = $template.clone();
        $($t1[0]).prepend('Got emp.json')
        $t1.find('code').append(`${JSON.stringify(d1, null, 2)}`)
        $r.append($t1);

        return $.getJSON('./jsons/projects.json')
    })
        .then(function (d2) {
            const $t2 = $template.clone();
            $t2.prepend('Got projects.json')
            $t2.find('code').append(`${JSON.stringify(d2, null, 2)}`)
            $r.append($t2);

            return $.getJSON('./jsons/skills.json')
        })
        .then(function (d3) {
            const $t3 = $template.clone();
            $t3.prepend('Got skills.json')
            $t3.find('code').append(`${JSON.stringify(d3, null, 2)}`)
            $r.append($t3);

        }, function (err) {
            const $t = this.$template.clone();
            $t.find('code').append(`${err}`);
            $r.append($t);
        });
})();

let PromiseWithGenerator = {
    $r: $('#r4'),
    $template: $(`<div class='col'><pre><code></code></pre></div><br>`),

    init: function () {
        Promise.coroutine(this.generator)().catch(err => {
            const $t = this.$template.clone();
            $t.find('code').append(`${err}`);
            this.$r.append($t);
        })
    },
    generator: function* () {
        const d1 = yield $.getJSON('./jsons/emp.json');
        PromiseWithGenerator.writeResult('emp', d1);

        const d2 = yield $.getJSON('./jsons/projects.json');
        PromiseWithGenerator.writeResult('project', d2);

        const d3 = yield $.getJSON('./jsons/skills.json');
        PromiseWithGenerator.writeResult('skills', d3)
    },

    writeResult: function (name, data) {
        const $t1 = this.$template.clone();
        $($t1[0]).prepend('Got ' + name + '.json')
        $t1.find('code').append(`${JSON.stringify(data, null, 2)}`)
        this.$r.append($t1);
    }
}

let AsyncAwait = {
    $r: $('#r5'),
    $template: $(`<div class='col'><pre><code></code></pre></div><br>`),
    init: function () {
        this.request().then(function () { }).catch(err => {
            const $t = this.$template.clone();
            $t.find('code').append(`${err}`);
            this.$r.append($t);
        });
    },
    request: async () => {
        try {
            const d1 = await $.getJSON('./jsons/emp.json');
            AsyncAwait.writeResult('emp', d1);

            const d2 = await $.getJSON('./jsons/projects.json');
            AsyncAwait.writeResult('project', d2);

            const d3 = await $.getJSON('./jsons/skills.json');
            AsyncAwait.writeResult('skills', d3)
            return "done"
        } catch (err) {
            throw err;
        }
    },
    writeResult: function (name, data) {
        const $t1 = this.$template.clone();
        $($t1[0]).prepend('Got ' + name + '.json')
        $t1.find('code').append(`${JSON.stringify(data, null, 2)}`)
        this.$r.append($t1);
    }
}