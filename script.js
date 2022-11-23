
//test function if firebase is connected uncomment to test before using
// db.collection("impact").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   });
// });

// //read db collection/document
// var docRef = db.collection("impact").doc("vS4i2uZyz9f4wNzckrmv");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });


function getAllData() {
  db.collection("impact").get().then((querySnapshot) => {
    let impact = []
    querySnapshot.forEach(doc => {
      impact.push(doc.data());
    });
    // console.log(impact);
    // console.log(impact[0].children)

    let trees = document.getElementById("trees");
    let co2 = document.getElementById("co2");
    let children = document.getElementById("children");

    trees.innerHTML = impact[0].trees;
    co2.innerHTML = impact[0].co2;
    children.innerHTML = impact[0].children;

  })
}

window.onload = getAllData()


