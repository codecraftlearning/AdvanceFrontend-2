
function fetchData(url) {
    const data = fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            console.log(response.json());
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    console.log("fetch completed ");

}

async function fetchDataAsync(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }  
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }


    console.log("fetch completed ");
}


function getAllData() {
    // fetchData('https://jsonplaceholder.typicode.com/posts/1/comments');
    fetchDataAsync('https://jsonplaceholder.typicode.com/posts/1/comments');
}