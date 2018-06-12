let createNode = el => document.createElement(el);
let append = (parent, el) => parent.appendChild(el);
const ul = document.getElementById('main');
fetch('http://srx.pubcdn.net/pdata.php?v=2&id=1940&x=6')
.then((resp) => resp.json())
.then(data => {
    let logo = data.m.i;
    document.getElementById('logo-img')
    .innerHTML = `<img src=${logo} />`;
    data.c.forEach((element) => {
        let images = element.i;
        let content = element.t;
        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');
        img.src = images;
        span.innerHTML = content;
        append(li, img);
        append(li, span);
        append(ul, li);
    }, this);
})
.catch(err => {
    console.log('Error!', err);
})