"use client"
import Sidebar from "@/components/sidebar";
import React, { useEffect } from "react";
import GlobalSateProvider from '../components/globalStateProvider'
import HigherOrderComponent from '../components/higherOrderComp'
import AddingTwonumbers from '../components/addingNumbers'
import { Provider } from "react-redux";
import store from '../reactRedux/store';

function Home() {

  // function uncommonFromSentences(s1: string, s2: string): string[] {
  //   const finalArr: string[] = []
  //   let s1word = s1.split(' ');
  //   let s2word = s2.split(' ');
  //   for (let i = 0; i <= s1word.length - 1; i++) {
  //     // console.log(s1word[i] !== s1word[i + 1]);
  //     if(s1word[i] === s1word[i + 1]) {
  //       console.log(s1word[i]);
  //      let a=  s1word.splice(i, 1)
  //      console.log(a);
  //     }
  //     if (!s2word.includes(s1word[i]) || s1word[i] !== s1word[i + 1]) {
  //       finalArr.push(s1word[i]);
  //     }
  //   }

  //   for (let str in s2word) {
  //     if (!s1word.includes(s2word[str])) {
  //       finalArr.push(s2word[str])
  //     }
  //   }
  //   // console.log(finalArr);
  //   return finalArr;
  // }


  // const s1 = "apple apple is sweet";
  // const s2 = "this apple is sour";
  // let arr = [35, 34, 12, 10, 1, 1]
  // let arr = [16, 17, 4, 3, 5, 2]
  // let arr = [2, 3, 1, 2, 3]
  let arr = [1, 2, 0, 3];
  useEffect(() => {
    // uncommonFromSentences(s1, s2)
    // console.log(getSecondLargest(arr));
    // console.log(leaders(arr));
    // console.log(findDuplicates(arr));
    // console.log(findEquilibrium(arr));
  }, [])

  // function missingNumber(arr: number[]): number {
  //   let initial = 1
  //   let finalVal: number = 0;
  //   for (let i = 0; i <= arr.length - 1; i++) {
  //     if (arr.includes(initial)) {
  //       initial++
  //     } else {
  //       finalVal = initial;
  //       break;
  //     }
  //   }
  //   console.log(finalVal);
  //   return finalVal
  // }

  // function missingNumber(arr: number[]): number {
  //   const n = arr.length + 1;
  //   let actual = 0
  //   const expect = (n * (n + 1)) / 2
  //   for (let i = 0; i <= arr.length - 1; i++) {
  //     actual += arr[i]
  //   }
  //   return expect - actual
  // }

  // function getSecondLargest(arr: number[]): number {
  //   let order = arr.sort((a, b) => b - a)
  //   for (let i = 0; i < order.length; i++) {
  //     if (order[i] > order[i + 1]) 
  //     return order[i + 1]
  //   }
  //   return -1
  // }

  // function leaders(arr: number[]): number[] {
  //   let finalArr: number[] = []
  //   const lastElement = arr[arr.length - 1];
  //   for (let i = 0; i <= arr.length - 1; i++) {
  //     if (arr[i] < arr[i + 1]) {
  //       finalArr.push(arr[i + 1])
  //     }
  //   }
  //   let merge = [...finalArr, lastElement]
  //   return merge
  // }

  // function findDuplicates(arr: number[]) {
  //   let finalArr: number[] = []
  //   for (let i = 0; i <= arr.length - 1; i++) {
  //     for (let j = i + 1; j <= arr.length - 1; j++) {
  //       if (arr[i] === arr[j]) {
  //         finalArr.push(arr[i])
  //       }
  //     }
  //   }
  //   return finalArr
  // }

  function findEquilibrium(arr: number[]) {
    const n = arr.length;
    let equilibriumPoints;

    if (n === 0) {
      return equilibriumPoints; // Handle empty array
    }

    for (let i = 0; i < n; i++) {
      let leftSum = 0;
      console.log(i);

      for (let j = 0; j < i; j++) {
        console.log(arr[j]);
        leftSum += arr[j];
      }

      let rightSum = 0;
      for (let j = i + 1; j < n; j++) {
        rightSum += arr[j];
      }

      if (leftSum === rightSum) {
        // equilibriumPoints.push(i + 1); // 1-based indexing
      }
    }

  }

  return (
    // <GlobalSateProvider>
    <Provider store={store}>
      <div className="w-100 flex flex-row p-2 m-2">
        <div className="w-25 flex flex-col">
          <Sidebar />
        </div>
        <div className="w-75 flex-col ml-2">
          <div> Header Content</div>
          <div>Main Content</div>
        </div>
        <HigherOrderComponent />
        <AddingTwonumbers />
      </div>
    </Provider>
    // </GlobalSateProvider>
  );
}

export default Home 