import React, { FC } from "react";

const Pagebreak: FC = () => (
<div style={{ display: "flex", opacity: 0.5, alignItems: "center" }}>
<div style={{ flex: 1, borderBottom: "1px dashed black" }}></div>
<div style={{ fontSize: "16px", margin: "0 12px" }}>✂</div>
<div style={{ flex: 1, borderBottom: "1px dashed black" }}></div>
</div>)

export default Pagebreak