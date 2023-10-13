
			const formLogin = document.getElementById("form-login")
			const formRegistrasi = document.getElementById("form-registrasi")
			const hasilLogin = document.getElementById("hasil-login")
			const hasilRegistrasi = document.getElementById("hasil-registrasi")
			const loginForm = document.getElementById("login-form")
			const registerForm = document.getElementById("register-form")
			const tampilkanRegistrasiButton = document.getElementById(
				"tampilkan-registrasi"
			)
			const tampilkanLoginButton = document.getElementById("tampilkan-login")

			// Data pengguna (contoh, Anda akan menyimpannya di database)
			const users = [
				{ nama: "User1", email: "user1@example.com", password: "password1" },
				{ nama: "User2", email: "user2@example.com", password: "password2" },
			]

			tampilkanRegistrasiButton.addEventListener("click", function () {
				loginForm.style.display = "none"
				registerForm.style.display = "block"
			})

			tampilkanLoginButton.addEventListener("click", function () {
				registerForm.style.display = "none"
				loginForm.style.display = "block"
			})

			formLogin.addEventListener("submit", function (event) {
				event.preventDefault()
				const emailLogin = document.getElementById("email-login").value
				const passwordLogin = document.getElementById("password-login").value

				// Memeriksa apakah email dan kata sandi sesuai dengan data pengguna
				const user = users.find(
					(u) => u.email === emailLogin && u.password === passwordLogin
				)

				if (user) {
					hasilLogin.innerHTML = `<p>Selamat datang, ${user.nama}!</p>`
				} else {
					hasilLogin.innerHTML = `<p>Login gagal. Periksa email dan kata sandi Anda.</p>`
				}
			})

			formRegistrasi.addEventListener("submit", function (event) {
				event.preventDefault()
				const namaRegistrasi = document.getElementById("nama-registrasi").value
				const emailRegistrasi =
					document.getElementById("email-registrasi").value
				const passwordRegistrasi = document.getElementById(
					"password-registrasi"
				).value

				// Simpan data pengguna yang baru terdaftar
				users.push({
					nama: namaRegistrasi,
					email: emailRegistrasi,
					password: passwordRegistrasi,
				})

				hasilRegistrasi.innerHTML = `<p>Registrasi berhasil untuk ${emailRegistrasi}.</p>`
			})

