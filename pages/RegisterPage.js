// pages/RegisterPage.js

require("dotenv").config(); // Cargar las variables de entorno desde .env
class RegisterPage {
  constructor(page) {
    this.page = page;
    this.fullNameInput = this.page.getByPlaceholder("Full name");
    this.emailInput = this.page.getByPlaceholder("Email address");
    this.passwordInput = this.page.getByPlaceholder("Password", {
      exact: true,
    });
    this.confirmPasswordInput = this.page.getByPlaceholder("Confirm Password");
    this.termsCheckbox = this.page.locator("span").first(); // Selector más robusto

    this.registerButton = this.page.getByRole("button", { name: "Register" });
  }

  async goToRegister() {
    const baseURL = process.env.BASE_URL;
    //console.log(process.env.baseURL);
    await this.page.goto(baseURL);
    await this.page.getByRole("link", { name: "Auth" }).click();
    await this.page.getByRole("link", { name: "Register" }).click();
  }

  async fillRegistrationForm({
    fullName,
    email,
    password,
    confirmPassword = password,
  }) {
    await this.fullNameInput.fill(this.generateRandomUsername());
    await this.emailInput.fill(this.generateRandomEmail());
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async acceptTerms() {
    await this.termsCheckbox.click();
  }

  async submitRegistrationForm() {
    await this.acceptTerms(); // Aceptar términos automáticamente antes de enviar
    await this.registerButton.click();
  }

  async fillRegistrationFormIncorrect(
    fullName,
    email,
    password,
    confirmPassword
  ) {
    return this.fillRegistrationForm({
      fullName,
      email,
      password,
      confirmPassword,
    });
  }

  // Método para generar un nombre de usuario aleatorio
  generateRandomUsername() {
    const username = `user_${Math.random().toString(36).substring(2, 10)}`; // Genera un nombre de usuario aleatorio
    return username;
  }

  // Método para generar un correo electrónico aleatorio
  generateRandomEmail() {
    const email = `${Math.random().toString(36).substring(2, 10)}@example.com`; // Genera un correo electrónico aleatorio
    return email;
  }
}

module.exports = { RegisterPage };
