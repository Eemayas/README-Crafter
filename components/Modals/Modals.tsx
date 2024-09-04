/** @format */

"use client";
import { RootState } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";

export const CustomSpinner = () => {
  const modalInfos = useSelector((state: RootState) => state.modal);
  return (
    <>
      <div
        className={`justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm ${
          modalInfos.spinner.isShow ? "flex" : "hidden"
        } `}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
      </div>
      <div
        className={`${
          modalInfos.spinner.isShow ? "" : "hidden"
        } opacity-25 fixed inset-0 z-40 bg-black`}
      ></div>
    </>
  );
};
// export const SucessModal = () => {
//   // To call the Sucess Modal
//   // const dispatch = useDispatch();

//   // dispatch({
//   //   type: IS_SHOW_SUCESS_MODAL,
//   //   payload: {
//   //     isShow: true,
//   //     title: "Sucess",
//   //     description:
//   //       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,consequatur ",
//   //   },
//   // });

//   // dispatch({
//   //   type: IS_SHOW_SUCESS_MODAL,
//   //   payload: {
//   //     isShow: false,
//   //     title: "Sucess",
//   //     description:
//   //       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,consequatur ",
//   //   },
//   // });

//   const dispatch = useDispatch();
//   const modalInfos = useSelector((state: any) => state.ModalReducer);
//   return (
//     <>
//       <div
//         className={`justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm ${
//           modalInfos.sucessModal.isShow ? "flex" : "hidden"
//         } `}
//       >
//         <Card
//           // isBlurred
//           className="border-1 border-green-500 sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] flex flex-col items-center gap-2 -translate-y-1/2 p-6 left-1/2 -translate-x-1/2 absolute top-1/2"
//           shadow="sm"
//         >
//           <CardHeader>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="text-[#059669] mx-auto h-20 rounded-full bg-[#D1FAE5] w-20"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </CardHeader>
//           <CardBody>
//             <span className="text-2xl text-center font-medium">
//               {modalInfos.sucessModal.title}
//             </span>
//             <p className="text-center">{modalInfos.sucessModal.description}</p>
//           </CardBody>
//           <CardFooter className="justify-end">
//             <Button
//               radius="full"
//               className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
//               onClick={() => {
//                 dispatch({
//                   type: IS_SHOW_SUCESS_MODAL,
//                   payload: {
//                     isShow: false,
//                     title: "Sucess",
//                     description:
//                       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,consequatur ",
//                   },
//                 });
//               }}
//             >
//               Close
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//       <div
//         className={`${
//           modalInfos.sucessModal.isShow ? "" : "hidden"
//         } opacity-25 fixed inset-0 z-40 bg-black`}
//       ></div>
//     </>
//   );
// };
// export const ErrorModal = () => {
//   // To call the Error Modal
//   // const dispatch = useDispatch();

//   // dispatch({
//   //   type: IS_SHOW_ERROR_MODAL,
//   //   payload: {
//   //     isShow: true,
//   //     title: "Error",
//   //     description:
//   //       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,consequatur ",
//   //   },
//   // });

//   // dispatch({
//   //   type: IS_SHOW_ERROR_MODAL,
//   //   payload: {
//   //     isShow: false,
//   //     title: "Error",
//   //     description:
//   //       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,consequatur ",
//   //   },
//   // });

//   const dispatch = useDispatch();
//   const modalInfos = useSelector((state: any) => state.ModalReducer);
//   // console.log(modalInfos.errorModal.isShow);
//   return (
//     <>
//       <div
//         className={`justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm ${
//           modalInfos.errorModal.isShow ? "flex" : "hidden"
//         } `}
//       >
//         <Card
//           // isBlurred
//           className="border-1 border-red-500 sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] flex flex-col items-center gap-2 -translate-y-1/2 p-6 left-1/2 -translate-x-1/2 absolute top-1/2"
//           shadow="sm"
//         >
//           <CardHeader>
//             <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100">
//               <ErrorIcon className="h-16 w-16 text-red-600" />
//             </div>
//           </CardHeader>
//           <CardBody>
//             <span className="text-2xl text-center font-medium">
//               {modalInfos.errorModal.title}
//             </span>
//             <p className="text-center">{modalInfos.errorModal.description}</p>
//           </CardBody>
//           <CardFooter className="justify-end">
//             <Button
//               radius="full"
//               className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
//               onClick={() => {
//                 dispatch({
//                   type: IS_SHOW_ERROR_MODAL,
//                   payload: {
//                     isShow: false,
//                     title: "Error",
//                     description:
//                       "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,consequatur ",
//                   },
//                 });
//               }}
//             >
//               Close
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//       <div
//         className={`${
//           modalInfos.sucessModal.isShow ? "" : "hidden"
//         } opacity-25 fixed inset-0 z-40 bg-black`}
//       ></div>
//     </>
//   );
// };
