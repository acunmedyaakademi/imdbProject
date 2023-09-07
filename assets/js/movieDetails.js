// import { elements } from "./base.js"

// export const displayMovie = movies => {
//     let films = "";

//     for (let i = 0; i < movies.length; i++) {
//         films = movies[i];
//         console.log(films)
//     }

//     const html = `
//     <div class="container mt-3">

//     <!-- Button to Open the Modal -->
//     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
//      ${films.name}
//     </button>

//     <!-- The Modal -->
//     <div class="modal fade" id="myModal">
//       <div class="modal-dialog">
//         <div class="modal-content">


//           <div class="modal-header">
//             <h4 class="modal-title"></h4>
//             <button type="button" class="close" data-dismiss="modal">×</button>
//           </div>


//           <div class="modal-body">

//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
//           </div>

//         </div>
//       </div>
//     </div>

//   </div>
//     `;

//     elements.movieDetails.innerHTML = html;
// }