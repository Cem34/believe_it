   <?php
		$nom = $_POST['name'];
		$mail = $_POST['mail'];
		$sujet = $_POST['subject'];
		$message = $_POST['message'];

		if(isset($nom) && isset($mail) && isset($sujet) && isset($message) && !empty($nom) && !empty($mail) && !empty($sujet) && !empty($message)){
			$message = "Nom : " . $nom . "\n" . "Email : " . $mail . "\n" . "Sujet : " . $sujet . "\n" . "Message : " . $message;
			mail("alex.michel@believeit.fr" , "[Believe It Contact] ", $message);
			header("Location :index.php?check=ok#section_contact");
		}
		else{
			header("Location :index.php?check=error#section_contact");
		}
	?>

