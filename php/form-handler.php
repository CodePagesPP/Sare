<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"] ?? "";
    $nombre = $_POST["nombre"] ?? "";
    $company = $_POST["company"] ?? "";
    $telefono = $_POST["telefono"] ?? "";
    $message = $_POST["message"] ?? "";

    $correoDestino = "luis.salazar@sarecorp.com"; 

    $contenidoHTML = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background: #f9f9f9;'>
        <div style='text-align: center; padding-bottom: 20px; border-bottom: 2px solid #049990;'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' alt='Logo Sare' style='max-width: 120px; margin-bottom: 10px;'/>
            <h2 style='color: 
            #049990; margin: 0;'>Nueva solicitud de contacto desde la web Sare</h2>
        </div>
        <div style='padding: 20px;'>
            <p style='font-size: 15px; color: #333;'>Una nueva solicitud de contacto a sido recibida con los siguientes datos:</p>
            <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
                <tr>
                    <td style='padding: 8px; font-weight: bold; background: #f1f1f1;'>Email:</td>
                    <td style='padding: 8px;'>$email</td>
                </tr>
                <tr>
                    <td style='padding: 8px; font-weight: bold; background: #f1f1f1;'>Name:</td>
                    <td style='padding: 8px;'>$nombre</td>
                </tr>
                <tr>
                    <td style='padding: 8px; font-weight: bold; background: #f1f1f1;'>Company:</td>
                    <td style='padding: 8px;'>$company</td>
                </tr>
                <tr>
                    <td style='padding: 8px; font-weight: bold; background: #f1f1f1;'>Phone:</td>
                    <td style='padding: 8px;'>$telefono</td>
                </tr>
                <tr>
                    <td style='padding: 8px; font-weight: bold; background: #f1f1f1;'>Message:</td>
                    <td style='padding: 8px;'>$message</td>
                </tr>
            </table>
        </div>
        <div style='text-align: center; font-size: 12px; color: #666; padding-top: 15px; border-top: 1px solid #ddd;'>
            Este mensaje fue generado automáticamente desde el sitio web Sare.
        </div>
    </div>
";


    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.office365.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'luis.salazar@sarecorp.com'; 
        $mail->Password = 'contrasena_aplicacion';        
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($mail->Username, 'Sare');
        $mail->addAddress($correoDestino);

        $mail->isHTML(true);
        $mail->Subject = 'Nueva solicitud de contacto - Sare';
        $mail->Body    = $contenidoHTML;

        $mail->send();
        echo "<script>alert('✅ Mensaje enviado correctamente.'); window.history.back();</script>";
    } catch (Exception $e) {
        echo "<script>alert('❌ Error al enviar el correo: {$mail->ErrorInfo}'); window.history.back();</script>";
    }
} else {
    echo "Acceso no permitido.";
}
