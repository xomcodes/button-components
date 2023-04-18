import React from "react";
import Sidebar from "../components/sidebar";
import Button from "@/components/Button";

function index() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "start",
      }}
    >
      <Button disableShadow />
      <Button disableShadow disabled />
      <Button variant="text" disabled />

      <Button startIcon="ic:sharp-add-shopping-cart" />
      <Button endIcon="ic:sharp-add-shopping-cart" />
      <Button size="sm" />
      <Button size="md" />
      <Button size="lg" />
      <Button color="default" />
      <Button color="secondary" />
      <Button color="danger" />
      <Button color="primary" />

      {/* <button>to disable</button> */}
      {/* <Button bg="none" border="1px solid grey" color="#000000" /> */}
    </form>
  );
}

export default index;
