function callbackSp(){
    let $r = $('#r1')
    let $template = $(`<div class='col'><pre><code></code></pre></div><br>`);
    $.getJSON('./jsons/emp.json', function(d1){
        
        const $t1 = $template.clone();
        $($t1[0]).prepend('Got emp.json')
        $t1.find('code').append(`${JSON.stringify(d1, null, 2)}`)
        $r.append($t1);

        $.getJSON('./jsons/projects.json', function(d2){
            const $t2 = $template.clone();
            $t2.prepend('Got projects.json')
            $t2.find('code').append(`${JSON.stringify(d2, null, 2)}`)
            $r.append($t2);

            $.getJSON('./jsons/skills.json', function(d3){
                const $t3 = $template.clone();
                $t3.prepend('Got skills.json')
                $t3.find('code').append(`${JSON.stringify(d3, null, 2)}`)
                $r.append($t3);
                
            }, 
            function(err3){
                $r.append(err3+"<br>");
            });
        }, 
        function(err2){
            $r.append(err2+"<br>");
        });
    }, 
    function(err1){
        $r.append(err1+"<br>");
    });
}

var callbackNamed  = {
    $r:$('#r2'),
    $template :$(`<div class='col'><pre><code></code></pre></div><br>`),

    init:function(){
        this.getEmp();
    },
    handleError:function(err){
        const $t = this.$template.clone();
        $t.find('code').append(`${err}`);
        this.$r.append($t);
    },
    getEmp: function(){
        $.getJSON('./jsons/emp.json', (d)=>{
            const $t = this.$template.clone();
            $t.prepend('Got emp.json')
            $t.find('code').append(`${JSON.stringify(d, null, 2)}`)
            this.$r.append($t);

            this.getProject();
            
        }, this.handleError)
    },
    getProject:function(){
        $.getJSON('./jsons/projects.json', (d)=>{
            const $t = this.$template.clone();
            $t.prepend('Got projects.json')
            $t.find('code').append(`${JSON.stringify(d, null, 2)}`)
            this.$r.append($t);

            this.getSkill()

        },this.handleError);
    },
    getSkill:function(){
        $.getJSON('./jsons/skills.json', (d)=>{
            const $t = this.$template.clone();
            $t.prepend('Got skills.json')
            $t.find('code').append(`${JSON.stringify(d, null, 2)}`)
            this.$r.append($t);
            
        },this.handleError);
    }
}