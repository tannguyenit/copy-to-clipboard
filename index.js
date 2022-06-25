/**
 * Function to copy the given text to the clipboard 
 * @param {String} text 
 */
function copyTextToClipboard(text){
    var textArea = document.createElement('textarea');
    var st = textArea.style;
  
    st.position = 'fixed';
    st.top = 0;
    st.left = 0;
    st.width = '2em';
    st.height = '2em';
    st.padding = 0;
    st.border = 'none';
    st.outline = 'none';
    st.boxShadow = 'none';
    st.background = 'transparent';
  
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    var result = document.execCommand('copy');
    document.body.removeChild(textArea);

    return result;
}

/**
 * Copies the given text and executes done() when finished copying.
 * @param {Object} options 
 * @param {String} options.text
 * @param {Function} options.done
 */
function handle(options) {
    var defaults = {
        text: '',
        done: function(){ return; }
    }
    var settings = Object.assign({}, defaults, options);
    var text = settings.text
    var done = settings.done;

    copyTextToClipboard(text);
    done();
}

module.exports = handle;
