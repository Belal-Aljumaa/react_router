import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { PageUnterDenLinden } from "./PageUnterDenLinden";
import { PageBrandenburgGate } from "./PageBrandenburgGate";
import { PageCheckpointCharlie } from "./PageCheckpointCharlie";

export const PageMitte = () => {
  return (
    <>
      <p>Welcome to the Mitte page.</p>
      <nav>
        <NavLink to="checkpointCharlie">Checkpoint Charlie</NavLink>
        <NavLink to="brandenburgGate">Brandenburg Gate</NavLink>
        <NavLink to="unterDenLinden">Unter den Linden</NavLink>
      </nav>
      <Routes>
        <Route path="checkpointCharlie" element={<PageCheckpointCharlie />} />
        <Route path="brandenburgGate" element={<PageBrandenburgGate />} />
        <Route path="unterDenLinden" element={<PageUnterDenLinden />} />
        <Route path="/" element={<Navigate to="checkpointCharlie" replace />} />
      </Routes>
    </>
  );
};
