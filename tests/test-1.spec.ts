// tests/register.test.js
const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../Pages/RegisterPage');


test('T01-User can register in the page', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  // Navegar a la página de registro
  await registerPage.goToRegister();

  // Rellenar el formulario de registro
  await registerPage.fillRegistrationForm({
    fullName: 'Guillermo Roche',
    email: 'prueba@prueba.es',
    password: '12345'
  });

  // Enviar el formulario (automáticamente acepta términos)
  await registerPage.submitRegistrationForm();

  // Verificar que el texto esperado es visible
  await expect(page.getByText('PW-test')).toBeVisible();
});

test('T02-User enters different passwords', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  // Navegar a la página de registro
  await registerPage.goToRegister();

  // Rellenar el formulario de registro con contraseñas distintas
  await registerPage.fillRegistrationForm({
    fullName: 'Guille',
    email: 'email@email.es',
    password: 'password',
    confirmPassword: 'password2'
  });

  // Enviar el formulario (automáticamente acepta términos)
  await registerPage.submitRegistrationForm();

  // Verificar que el texto esperado es visible
  await expect(page.getByText('PW-test')).toBeVisible();
});

test('T03-User enters different passwords', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  // Navegar a la página de registro
  await registerPage.goToRegister();

  // Rellenar el formulario de registro con contraseñas distintas
  await registerPage.fillRegistrationForm({
    fullName: 'Guille',
    email: 'email@email.es',
    password: 'password',
    confirmPassword: 'password2'
  });

  // Enviar el formulario (automáticamente acepta términos)
  await registerPage.submitRegistrationForm();

  // Verificar que el texto esperado es visible
  await expect(page.getByText('PW-test')).toBeVisible();
});
test('T04-User enters different passwords', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  // Navegar a la página de registro
  await registerPage.goToRegister();

  // Rellenar el formulario de registro con contraseñas distintas
  await registerPage.fillRegistrationForm({
    fullName: 'Guille',
    email: 'email@email.es',
    password: 'password',
    confirmPassword: 'password2'
  });

  // Enviar el formulario (automáticamente acepta términos)
  await registerPage.submitRegistrationForm();

  // Verificar que el texto esperado es visible
  await expect(page.getByText('PW-test')).toBeVisible();
});