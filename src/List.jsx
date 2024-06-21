import React from "react";

const List = () => {
  // cars rendering list
  const cars = [
    { id: 1, carName: "BMW", carColor: "red", carCount: 10 },
    { id: 2, carName: "Ferrari", carColor: "green", carCount: 50 },
    { id: 3, carName: "Lamborghini", carColor: "yellow", carCount: 100 },
    { id: 4, carName: "Mitsubishi", carColor: "black", carCount: 30 },
    { id: 5, carName: "Ford", carColor: "magenta", carCount: 300 },
  ];
  // Sorting Methods, Alphabetical, ReverseAlphabetical, Numerical and Reverse Numerical
  cars.sort((a, b) => a.carName.localeCompare(b.carName));
  cars.sort((a, b) => b.carName.localeCompare(a.carName));
  cars.sort((a, b) => a.carCount - b.carCount);
  cars.sort((a, b) => b.carCount - a.carCount);

  const listItemsTwo = cars.map((car) => (
    <li key={car.id}>
      {car.carName} : &nbsp; {car.carCount} , &nbsp; {car.carColor}
    </li>
  ));

  // Filtering carCounts

  //   const lowCarCounts = cars.filter((car) => car.carCount > 100);
  //   const lowCarCounts = cars.filter((car) => car.carCount < 100);

  //   const listItemsTwo = lowCarCounts.map((lowCarCount) => (
  //     <li key={lowCarCount.id}>
  //       {lowCarCount.carName} : &nbsp; {lowCarCount.carCount} , &nbsp;
  //       {lowCarCount.carColor}
  //     </li>
  //   ));

  // fruits rendering list
  const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  const listItems = fruits.map((fruit) => <li>{fruit}</li>);
  return (
    <div>
      <ol>{listItems}</ol>
      <hr />
      <ol>{listItemsTwo}</ol>
    </div>
  );
};

export default List;
