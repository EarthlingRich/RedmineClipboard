function readDom() {
    var subjectHtml = document.getElementsByClassName('subject')[0];
    var contentHtml = document.getElementById("content");
    var taskHeader = contentHtml.getElementsByTagName("h2")[0];

    var parentIssue = subjectHtml != null ? subjectHtml.getElementsByTagName("a")[0].innerText : "";
    var taskText = subjectHtml != null ? subjectHtml.getElementsByTagName("h3")[0].innerText : "";
    var task = taskHeader != null ? taskHeader.innerText : "";

    return parentIssue + ", " + task + ": " + taskText;
}

function copyToClipboard() {
    var textarea = document.createElement("textarea");
    textarea.textContent = readDom();
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    body.removeChild(textarea);
}

copyToClipboard();