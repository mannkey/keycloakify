import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), keycloakify({
        themeName: 'iheal-theme-base',
        accountThemeImplementation: "none",
        keycloakVersionTargets: {
            '21-and-below': false,
            '22-and-above': 'keycloak-iheal-base-theme.jar'
        }
    })]
});
