// import { useState } from "react";

// export const useConfirm = () => {
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [resolver, setResolver] = useState(null);

//   // هذه الدالة تُستخدم لطلب التأكيد
//   const confirm = (msg) => {
//     setMessage(msg || "Are you sure?");
//     setOpen(true);

//     return new Promise((resolve) => {
//       setResolver(() => resolve);
//     });
//   };

//   // عندما يضغط المستخدم Cancel
//   const handleCancel = () => {
//     setOpen(false);
//     resolver && resolver(false);
//   };

//   // عندما يضغط المستخدم Confirm
//   const handleConfirm = () => {
//     setOpen(false);
//     resolver && resolver(true);
//   };

//   // المكون نفسه
//   const ConfirmModal = () =>
//     open ? (
//       <div className="modal-backdrop">
//         <div className="modal">
//           <p>{message}</p>
//           <div className="actions">
//             <button onClick={handleCancel}>Cancel</button>
//             <button onClick={handleConfirm}>Confirm</button>
//           </div>
//         </div>
//       </div>
//     ) : null;

//   return { confirm, ConfirmModal };
// };
