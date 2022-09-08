
/**
 * Creates a bookmark object with associated rendering and deletion functions
 * @param {string} link String input from user indicating the url of the website
 * @param {string} name String input from user indicating desired name of bookmark. Can be anything they want. 
 */
function createBookMark(link, name){
    return {
        link, name,
        /**
         * Renders bookmark as an html element
         * @returns {HTMLElement}
         */
        render: function(){
            markRender = document.createElement("li")
            markRender.textContent = this.name
            return markRender
        },
        remove: function(){

        }
    }
}