    window.onload = () => {
        // alert(1)
    }

    var xmlhttp;
    var Books = [{
        "id" : 1,
        "bookName" : 骆驼祥子
        ""

    }]
    getBook('get',)
    var getBook = function getBook(method,url,isasync){
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open(method,url,isasync);
        xmlhttp.send();
    }