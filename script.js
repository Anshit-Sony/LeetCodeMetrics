const inp=document.getElementById("user-input");
const api="https://leetcode-stats-api.herokuapp.com/Anshit_Sony";
const btn=document.getElementById("search-btn");

btn.addEventListener("click", () => {
    window.preventDefault
    const val=inp.value;
    if(api.includes(val)){
        fetch(api).then(res=>{
            return res.json();
        }).then(datas=>{
            document.querySelector(".stat-container").style.display="flex";
            document.getElementById("total-problem").innerText=`Total Problem Solved: ${datas.totalSolved} / ${datas.totalQuestions}`;
            document.getElementById("easy-chart").innerText=`${datas.easySolved} / ${datas.totalEasy}`;
            document.getElementById("medium-chart").innerText=`${datas.mediumSolved} / ${datas.totalMedium}`;
            document.getElementById("hard-chart").innerText=`${datas.hardSolved} / ${datas.totalHard}`;
        }).catch(err=>{
            console.log(err);
        })
    }
    else{
        alert("Invalid Username. Please Re-enter")
        inp.value="";
    }
})


