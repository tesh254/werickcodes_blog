
export const metaTag = (name, desc, title) => {
    // Google meta tags
    const googleName = document.getElementById("g-name");
    const googleDesc = document.getElementById("g-desc"); 

    // Facebook meta tags
    const fbTitle = document.getElementById("fb-title");
    const fbDesc = document.getElementById("fb-desc");

    // Twitter meta tags
    const tTitle = document.getElementById("t-title");
    const tDesc = document.getElementById("t-desc");

    // Change title according to component rendered
    const TITLE = document.getElementById("t")

    // Set all tags
    googleDesc.setAttribute("content", desc);
    fbDesc.setAttribute("content", desc);
    tDesc.setAttribute("content", desc);
    googleName.setAttribute("content", name);
    fbTitle.setAttribute("content", name);
    tTitle.setAttribute("content", name);
    TITLE.innerHTML = title;
}