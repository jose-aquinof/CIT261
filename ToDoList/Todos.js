class Todos
{
static showComplete()
    {
        const list = document.querySelectorAll('.checkedLine')
        list.forEach((i, index) => {
            i.parentElement.style.display = "flex";
        });

        const list2 = document.querySelectorAll('.noYet')
        list2.forEach((i, index) => {
            i.parentElement.style.display = "none";
        });        
    }

    static showIncomplete()
    {
        const list = document.querySelectorAll('.noYet')
        list.forEach((i, index) => {
            i.parentElement.style.display = "flex";
        });

        const list2 = document.querySelectorAll('.checkedLine')
        list2.forEach((i, index) => {
            i.parentElement.style.display = "none";
        });
    }

    static showAll()
    {
        const list = document.querySelectorAll('.text')
        list.forEach((i, index) => {
            i.parentElement.style.display = "flex";
        });
    }
}