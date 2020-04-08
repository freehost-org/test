async function main() {
    
    iframe = "<p>Hello</p>";

    let div = document.createElement("iframe");
    div.src = "https://www.youtube.com/embed/N5HgK1bTLOg";
    div.width = 560;
    div.height = 315;
    div.frameborder = 0;
    div.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    let text = document.createTextNode(iframe);
    //div.appendChild(text);
    document.body.appendChild(div);

}


main();
