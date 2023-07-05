import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import React, { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import convDataIta from "./convDataIta";
const ShowBags = () => {
  const [bagList, setBagList] = useState([]);

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

  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Colore</Th>
            <Th>Prezzo</Th>
            <Th>Quantità</Th>
            <Th>Data Produzione</Th>
            <Th>Venduta</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bagList.map((bag) => (
            <Tr key={bag.ID}>
              <Td>{bag.ID}</Td>
              <Td>{bag.Nome}</Td>
              <Td>{bag.Colore}</Td>
              <Td>{bag.Prezzo}</Td>
              <Td>{bag.Quantità}</Td>
              <Td>{bag["Data produzione"]}</Td>
              <Td>{bag.Venduta}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ShowBags;
