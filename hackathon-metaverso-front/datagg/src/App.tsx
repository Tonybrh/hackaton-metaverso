import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { HomePage } from "./components/home/HomePage";
import { LoginPage } from "./components/auth/LoginPage";
import { CreateAccountPage } from "./components/auth/CreateAccountPage";
import { ForgotPasswordPage } from "./components/auth/ForgotPasswordPage";
import { WelcomeScreen } from "./components/onboarding/WelcomeScreen";
import { CoachOnboarding } from "./components/onboarding/CoachOnboarding";
import { CoachDashboard } from "./components/coach/CoachDashboard";
import { RelatoriosPage } from "./components/coach/RelatoriosPage";
import { JogadoresPage } from "./components/coach/JogadoresPage";
import { FormularioCoachPage } from "./components/coach/FormularioCoachPage";
import { AssistenteIAPage } from "./components/coach/AssistenteIAPage";
import { ConfiguracoesPage } from "./components/coach/ConfiguracoesPage";
import { PlayerDashboard } from "./components/player/PlayerDashboard";
import { ChatbotPage } from "./components/player/ChatbotPage";
import { PlayerLoginPage } from "./components/player/PlayerLoginPage";
import { PlayerFormPage } from "./components/player/PlayerFormPage";
import { PlayerConfigPage } from "./components/player/PlayerConfigPage";
import { ColorPalette } from "./components/ColorPalette";
import { TypographyGuide } from "./components/TypographyGuide";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/criar-conta" element={<CreateAccountPage />} />
        <Route path="/esqueceu-senha" element={<ForgotPasswordPage />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/onboarding" element={<CoachOnboarding />} />
        
        {/* Coach Routes */}
        <Route path="/coach/dashboard" element={<CoachDashboard />} />
        <Route path="/coach/relatorios" element={<RelatoriosPage />} />
        <Route path="/coach/jogadores" element={<JogadoresPage />} />
        <Route path="/coach/formulario" element={<FormularioCoachPage />} />
        <Route path="/coach/assistente" element={<AssistenteIAPage />} />
        <Route path="/coach/configuracoes" element={<ConfiguracoesPage />} />
        
        {/* Player Routes */}
        <Route path="/player/login" element={<PlayerLoginPage />} />
        <Route path="/player/dashboard" element={<PlayerDashboard />} />
        <Route path="/player/formulario" element={<PlayerFormPage />} />
        <Route path="/player/chatbot" element={<ChatbotPage />} />
        <Route path="/player/configuracoes" element={<PlayerConfigPage />} />
        
        {/* Design System */}
        <Route path="/paleta-cores" element={<ColorPalette />} />
        <Route path="/tipografia" element={<TypographyGuide />} />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
