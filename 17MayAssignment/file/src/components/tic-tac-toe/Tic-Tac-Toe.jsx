import React,{useState} from "react";
import styles from "./Tic-Tac-Toe.module.css";

const Tictactoe=()=>{
    const[turn,setTurn]=useState("x");
    const[cells,setCells]=useState(Array(9).fill(''));
    const[winner,setWinner]=useState();

    const checkForWinner=(squares)=>{
        let combos={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal:[
                [0,4,8],
                [2,4,6],
            ],
        }
        for(var key in combos){
            combos[key].forEach((a)=>{
                if(
                    squares[a[0]]===""||
                    squares[a[1]]===""||
                    squares[a[2]]===""
                ){
                    //do nothing
                }else if(
                    squares[a[0]]===squares[a[1]] &&
                    squares[a[1]]===squares[a[2]]
                ){
                    setWinner(squares[a[0]]);
                    setTimeout(()=>{
                        setCells(Array(9).fill(''))
                    },2000)
                }
            })
        }
    }
    const handleClick=(num)=>{
        if(cells[num]!=="")
        {
            alert("already clicked");
            return;
        }
        let squares=[...cells];

        // alert(num);
        if(turn==='X')
        {
            squares[num]="X";
            setTurn("O");
        }
        else{
            squares[num]="O";
            setTurn("X")
        }
        checkForWinner(squares);
        setCells(squares);
        //console.log(squares);
    }
    const handleRestart=()=>{
        setWinner(null);
        setCells(Array(9).fill(''));

    }
    return(
        <>
        <h1>Tic-Tac-Toe</h1>
       
        <div className={styles.container}>
           <div  className={styles.divi} onClick={()=>{handleClick(0)}} >{cells[0]}</div>
           <div  className={styles.divi} onClick={()=>{handleClick(1)}} >{cells[1]}</div>
           <div  className={styles.divi} onClick={()=>{handleClick(2)}} >{cells[2]}</div>
           <div  className={styles.divi} onClick={()=>{handleClick(3)}} >{cells[3]}</div>
           <div  className={styles.divi} onClick={()=>{handleClick(4)}} >{cells[4]}</div>
           <div  className={styles.divi} onClick={()=>{handleClick(5)}} >{cells[5]}</div>
           <div  className={styles.divi} onClick={()=>{handleClick(6)}} >{cells[6]}</div>
           <div  className={styles.divi} onClick={()=>{handleClick(7)}} >{cells[7]}</div>
           <div  className={styles.divi} onClick={()=>{handleClick(8)}} >{cells[8]}</div>
            
            
        </div>
        <div>
            {winner &&(
                <h3>congratulation ,{winner} is the Winner</h3>
            )}
        </div>
        <button onClick={()=>{handleRestart()}}>Play Again</button>
        
        </>   
    )

}
export default Tictactoe;