"use client";

import { create } from "zustand";
import axios from "axios";
import { API_URL } from "@/config/envConfig";
import { toastError, toastSuccess } from "@/utils/toastHandler";
import {
    handleResponse,
    handleError,
} from "@/utils/responseHandler";

type SubmissionPayload = Record<string, unknown>;

interface PublicStore {
    isLoading: boolean;
    error: string | null;
    message: string | null;

    submitContactForm: (
        data: SubmissionPayload
    ) => Promise<boolean>;

    submitSkilledUsersForm: (
        data: SubmissionPayload
    ) => Promise<boolean>;

    clearError: () => void;
    clearMessage: () => void;
}

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const submitForm = async (
    endpoint: string,
    data: SubmissionPayload,
    set: (
        partial: Partial<PublicStore>
    ) => void
): Promise<boolean> => {
    set({
        isLoading: true,
        error: null,
    });

    try {
        const response = await api.post(
            endpoint,
            data
        );

        const isSuccess = handleResponse(
            response,
            () => { },
            (message: string) =>
                set({
                    message,
                    isLoading: false,
                    error: null,
                })
        );

        if (isSuccess) {
            toastSuccess(
                "Form submitted successfully!"
            );
        }

        return isSuccess;
    } catch (error: any) {
        const isError = handleError(
            error,
            (errorMessage: string) =>
                set({
                    error: errorMessage,
                    isLoading: false,
                })
        );

        toastError(
            error?.response?.data?.message ||
            "Failed to submit form"
        );

        return isError;
    }
};

const publicStore = create<PublicStore>(
    (set) => ({
        isLoading: false,
        error: null,
        message: null,

        submitContactForm: async (data) =>
            submitForm(
                "/api/v1/submissions/contact",
                data,
                set
            ),

        submitSkilledUsersForm: async (
            data
        ) =>
            submitForm(
                "/api/v1/submissions/skilled-users",
                data,
                set
            ),

        clearError: () =>
            set({
                error: null,
            }),

        clearMessage: () =>
            set({
                message: null,
            }),
    })
);

export default publicStore;