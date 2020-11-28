/**
 * Created by Dima on 15.10.2019.

 how to use it:
 1. copy all content of this file to the browser console and run
 2. browse with cursor over elemnts and see DOM hierarchy

 */

function bb() {

    /*
     let els = document.querySelectorAll('*');
     //let els = g('*', document);
     //let e2 = document.querySelectorAll('*');
     //let els = [];
     els.forEach ((e) => {
     console.log(e.style.border);
     //if (e.style.display = 'none') e.style.display = 'block';
     //e.style.border = '1px solid red';
     //e.style.padding = '3px';
     console.log(e.style.border);
     });
     */
    var fiel = document.createElement('div');
    document.body.appendChild(fiel);
    fiel.style = 'width: 200px; min-height: 100px; display: inline-block; position:fixed; left: 100px; top: 100px; border: 2px solid blue;';
    fiel.style['background-color'] = "#fff";
    fiel.style['z-index'] = '10000';
    var prevEl, currEl;
    var nLvl = 3;
    var prevEls = [];
    var currEls = [];

    var setEl = function(el, border, color) {
        //el.style.border = border;
        //el.style.backgroundColor = color;
        //console.log('-----------', color, el.style.backgroundColor);
    };
    var clearEl = function(el) {
        //el.style.border = '0px';
        //el.style.backgroundColor = '#fff';
    }

    var collect = function(el) {
        var els = [el];
        var t = el;
        while (t.tagName != 'BODY') {
            t = t.parentElement;
            els.push(t);
        }
        return els.reverse();
    }
    var olda = []; var curra = [];
    var oldt, currt;
    var colors = ['red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue',
        'red', 'green', 'blue'];


    var mm2 = function(e) {
        if (e.target === currEl) {

        }

        fiel.style.left = e.clientX + 30 + 'px';
        fiel.style.top = e.clientY + 'px';

        fiel.style.left = e.clientX - 360 + 'px';
        fiel.style.top = e.clientY - 300 + 'px';

        var par = e.target.parentElement.tagName;
        var tag = e.target.tagName;
        var pars = [e.target];
        var t = e.target;
        fiel.style.position = 'fixed';
        fiel.style.width = '300px';
        fiel.style.height = '370px';
        fiel.style['font-size'] = '14px';
        //for (i=0; i<nLvl; i++) {

        if (oldt != t) {
            let s = '';
            olda = curra;
            curra = collect(t);
            for (i=0; i<olda.length; i++) {
                clearEl(olda[i]);
            }
            s+='<div>' + window.innerWidth + 'x' + window.innerHeight + '</div><div></div>';
            for (i=0; i<curra.length; i++) {
                let border = (1+ (i%4) * 2) + 'px solid ' + colors[i];
                //console.log('border', border, colors[i]);
                setEl(curra[i], border, colors[i]);
                //console.log('style ', curra[i].style.backgroundColor);
                let c = curra[i];
                let st = '<div style = "color: ' + colors[i] +';">' + c.tagName;
                if (c.id) st+= ' #' + c.id;
                if (c.className) st+=' .' + c.className;
                if (c.style.float) st+=' f:' + c.style.float;
                if (c.style.position) st+=' p:' + c.style.position;
                st+= ' #' + c.scrollWidth + 'x' + c.scrollHeight;
                //if (c.style.display)
                st+=' /' + getComputedStyle(c, null).display; // c.style.display;
                st+=' /p ' + getComputedStyle(c, null).position; // c.style.display;
                st += '</div>';
                s = s + st;

            };
            oldt = t;
            fiel.innerHTML = s;
            console.log('log', fiel.innerHTML);
        }


        //setEl(e.target);


        e.stopPropagation();
        e.preventDefault();


    };
    var b = document.querySelector('body');
    b.addEventListener('mousemove', mm2);
};

bb();

//   window.addEventListener('load', bb, false);
