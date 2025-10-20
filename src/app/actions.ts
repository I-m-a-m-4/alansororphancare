"use server";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function handleFormSubmission(
  formType: string,
  data: Record<string, unknown>
): Promise<{ success: boolean; error?: string }> {
  if (!formType) {
    return { success: false, error: "Form type is missing." };
  }

  try {
    const docRef = await addDoc(collection(db, formType), {
      ...data,
      submittedAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return { success: true };
  } catch (e) {
    console.error("Error adding document: ", e);
    if (e instanceof Error) {
      return { success: false, error: e.message };
    }
    return { success: false, error: "An unknown error occurred while saving the data." };
  }
}
