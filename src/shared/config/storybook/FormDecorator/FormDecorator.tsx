import React from "react";
import { Story } from "@storybook/react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

export const FormDecorator = (
    defaultValues?: DeepPartial<FieldValues>
) => (StoryComponent: Story) => {
    const methods = useForm<FieldValues>({
        defaultValues: defaultValues || {}
    })

    return (
        <FormProvider {...methods} >
            <StoryComponent  />
        </FormProvider>
    )
}