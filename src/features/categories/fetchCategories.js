const categoriesToFetch = ['programming','learnprogramming','ProgrammerHumor','AskProgramming','programminghorror','programmingcirclejerk','programmingmemes','programmingjokes','programmingdadjokes'];


const categoriesObj = [];




const fetchCategories = async () => {
    categoriesToFetch.forEach(async (category) => {
        const response = fetch(`https://www.reddit.com/r/${category}/about.json`)
        const data = await response.json();
        categoriesObj.push({
            name: data.data.display_name,
            title: data.data.title,
            icon: data.data.icon_img,
        });
    })
}