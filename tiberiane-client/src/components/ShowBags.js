import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import React, { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import convDataIta from "./convDataIta";
import { BsFillTrashFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShowBags = () => {
  const [bagList, setBagList] = useState([]);

  const notificaSuccesso = (successo) =>
    toast.success(successo, {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notificaAvvertimento = (avvertimento) =>
    toast.warn(avvertimento, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notificaErrore = (errore) =>
    toast.error(errore, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6868/admin/showBags", {
          method: "GET",
          headers: {
            authorization: `Bearer ${secureLocalStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        for (let i = 0; i < result.listaBorse.length; i++) {
          result.listaBorse[i]["Data produzione"] = convDataIta(
            result.listaBorse[i]["Data produzione"]
          );
        }
        setBagList(result.listaBorse);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (bagID) => {
    const response = await fetch("http://localhost:6868/admin/deleteBag", {
      method: "POST",
      headers: {
        authorization: `Bearer ${secureLocalStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        body: { bagID },
      },
    });
    const result = await response.json();
  };

  return (
    <div>
      <section>
        <Table className="table-auto border-separate bg-slate-200">
          <Thead>
            <Tr>
              <Th className="border border-slate-500">Elimina</Th>
              <Th className="border border-slate-500">ID</Th>
              <Th class="border border-slate-500">Nome</Th>
              <Th class="border border-slate-500">Colore</Th>
              <Th class="border border-slate-500">Prezzo</Th>
              <Th class="border border-slate-500">Quantità</Th>
              <Th class="border border-slate-500">Data Produzione</Th>
              <Th class="border border-slate-500">Venduta</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bagList.map((bag) => (
              <Tr key={bag.ID}>
                <Td class="lg:border border-slate-500 display-grid">
                  <button
                    className="bg-slate-500 hover:bg-slate-700 border-slate-300 text-gray-300 flex justify-center border-solid"
                    type="button"
                    onClick={() => handleDelete(bag.ID)}
                  >
                    <BsFillTrashFill style={{ fontSize: "24px" }} />
                  </button>
                </Td>
                <Td class="lg:border lg:border-slate-500 text-center ">
                  {bag.ID}
                </Td>
                <Td class="lg:border lg:border-slate-500 text-center ">
                  {bag.Nome}
                </Td>
                <Td class="lg:border lg:border-slate-500 text-center ">
                  {bag.Colore}
                </Td>
                <Td class="lg:border lg:border-slate-500 text-center ">
                  {bag.Prezzo}
                </Td>
                <Td class="lg:border lg:border-slate-500 text-center ">
                  {bag.Quantità}
                </Td>
                <Td class="lg:border lg:border-slate-500 text-center ">
                  {bag["Data produzione"]}
                </Td>
                <Td class="lg:border lg:border-slate-500 text-center ">
                  {bag.Venduta}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ShowBags;
