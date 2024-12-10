import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom"; // Necesario para useNavigate
import Login from "./Login"; // Ajusta la ruta según tu proyecto

afterEach(() => {
    cleanup();
});

describe("Test <Login />", () => {
test("Debe renderizar el formulario correctamente", () => {
    // Arrange
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const inputEmail = screen.getByPlaceholderText("Correo");
    const inputPassword = screen.getByPlaceholderText("Contraseña");
    const buttonSubmit = screen.getByRole("button", {
    name: /Iniciar Sesión/i,
    });

    // Assert
    expect(inputEmail).toBeDefined();
    expect(inputEmail.getAttribute("type")).toBe("email");

    expect(inputPassword).toBeDefined();
    expect(inputPassword.getAttribute("type")).toBe("password");

    expect(buttonSubmit).toBeDefined();
    expect(buttonSubmit.getAttribute("type")).toBe("submit");
});

test("Debe permitir escribir en los campos", async () => {
    // Arrange
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const user = userEvent.setup();
    const inputEmail = screen.getByPlaceholderText("Correo");
    const inputPassword = screen.getByPlaceholderText("Contraseña");
    const buttonSubmit = screen.getByRole("button", {
    name: /Iniciar Sesión/i,
    });

    // Act
    await user.type(inputEmail, "humberto@correo.com");
    await user.type(inputPassword, "123456");
    await user.click(buttonSubmit);

    // Assert
    expect(inputEmail.value).toBe("humberto@correo.com");
    expect(inputPassword.value).toBe("123456");
});

test("Debe mostrar una alerta al iniciar sesión con credenciales correctas", async () => {
    // Mock de window.alert
    jest.spyOn(window, "alert").mockImplementation(() => {});

    // Arrange
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const user = userEvent.setup();
    const inputEmail = screen.getByPlaceholderText("Correo");
    const inputPassword = screen.getByPlaceholderText("Contraseña");
    const buttonSubmit = screen.getByRole("button", {
    name: /Iniciar Sesión/i,
    });

    // Act
    await user.type(inputEmail, "test@example.com"); // Credenciales correctas
    await user.type(inputPassword, "123456");
    await user.click(buttonSubmit);

    // Assert
    expect(window.alert).toHaveBeenCalledWith("Inicio de sesión exitoso");
});

test("Debe mostrar una alerta al iniciar sesión con credenciales incorrectas", async () => {
    // Mock de window.alert
    jest.spyOn(window, "alert").mockImplementation(() => {});

    // Arrange
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const user = userEvent.setup();
    const inputEmail = screen.getByPlaceholderText("Correo");
    const inputPassword = screen.getByPlaceholderText("Contraseña");
    const buttonSubmit = screen.getByRole("button", {
    name: /Iniciar Sesión/i,
    });

    // Act
    await user.type(inputEmail, "wrong@example.com"); // Credenciales incorrectas
    await user.type(inputPassword, "wrongpassword");
    await user.click(buttonSubmit);

    // Assert
    expect(window.alert).toHaveBeenCalledWith("Credenciales incorrectas");
});
});
