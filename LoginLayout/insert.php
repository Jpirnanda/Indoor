<?php
$CN = mysqli_connect("grupotoyoserra_dbase", "189.1.48.20", "GPTS!!022@ggkk!");
$DB = mysqli_select_db($CN, "grupotoyoserra_toyo");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$m_Email = $DecodedData['m_Email'];
$m_Senha = $DecodedData['m_Senha'];

$insertMemberData = "insert into memberData(m_Email, m_Senha) values ($m_Email, '$m_Senha')";

$register = mysqli_query($CN, $insertMemberData);

if ($register)
    $Message = "Member has been registered successfully";
else
    $Message = "Server Error... please try latter";

$Response[] = array("Message" => $Message);
echo json_encode($Response);
?>