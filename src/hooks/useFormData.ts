import { useState } from "react";
import type { FormData } from "../types";

export function useFormData(initialData: FormData = { name: "", email: "", message: "" }) {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [focused, setFocused] = useState<string | null>(null);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  return { formData, setFormData, updateField, resetForm, focused, setFocused };
}
