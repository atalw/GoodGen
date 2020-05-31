var buttonBar = document.getElementsByClassName('buyButtonBar')[0];

// do this because sometimes the last button does not have a dropdown.
// so select the button which has a dropdown only.
var buttonBarItem;
if (buttonBar.lastChild.firstChild.childNodes.length > 1) {
    buttonBarItem = buttonBar.lastChild;
} else {
    buttonBarItem = buttonBar.childNodes[1];
}
var libGenListItem = buttonBarItem.cloneNode(true);

var listChildren = libGenListItem.firstChild.childNodes;
// Empty your mind, be formless. Shapeless, like water. 
// If you put water into a cup it becomes the cup.
// You put water into a bottle and it becomes the bottle.
// You put it into a teapot it becomes the teapot. 
// Now, water can flow or it can crash.
// Be water my friend.
// empty the child
listChildren[1].innerHTML = "";
// change the title of the node
listChildren[0].firstChild.nodeValue = "LibGen Links ▾";

// add links to the dropdown

// add title link
var bookTitle = document.getElementById('bookTitle').innerHTML;
bookTitle = bookTitle.trim();
var formattedBookTitle = bookTitle.split(' ').join('+');
var url = `https://libgen.is/search.php?req=${formattedBookTitle}&lg_topic=libgen&open=0&view=simple&res=100&phrase=1&column=title`;

var aTitle = document.createElement('a');
var linkText = document.createTextNode('Title');
aTitle.appendChild(linkText);
aTitle.target = "_blank";
aTitle.rel = "nofollow noopener noreferrer";
aTitle.className = "actionLinkLite";
aTitle.href = url;

listChildren[1].appendChild(aTitle);

// add author name link

var authorsElement = document.getElementById('bookAuthors').childNodes[3];
var primaryAuthorElement = authorsElement.childNodes[1];
var author = primaryAuthorElement.childNodes[1].textContent;
author = author.trim();
var formatterAuthor = author.split(' ').join('+');
var url = `https://libgen.is/search.php?req=${formatterAuthor}&lg_topic=libgen&open=0&view=simple&res=100&phrase=1&column=author`;

var aAuthor = document.createElement('a');
var linkText = document.createTextNode('Author');
aAuthor.appendChild(linkText);
aAuthor.target = "_blank";
aAuthor.rel = "nofollow noopener noreferrer";
aAuthor.className = "actionLinkLite";
aAuthor.href = url ;

var emptyLineElement = document.createElement('br');
listChildren[1].appendChild(emptyLineElement);
listChildren[1].appendChild(aAuthor);

buttonBar.appendChild(libGenListItem);