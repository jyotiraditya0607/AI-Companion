"use client";

import * as z from "zod";
import { Category, Companion } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

interface CompanionFormProps {
    initialData: Companion | null;
    categories: Category[];
}

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required.",
    }),
    description: z.string().min(1, {
        message: "Description is required",
    }),
    instruction: z.string().min(200, {
        message: "Instruction required at least 200 characters.",
    }),
    seed: z.string().min(200, {
        message: "Seed required at least 200 characters.",
    }),
    src: z.string().min(1, {
        message: "Image is required.",
    }),
    categoryId: z.string().min(1, {
        message: "Category is required.",
    }),

})

export const CompanionForm = ({
    categories,
    initialData
}: CompanionFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name: "",
            description: "",
            instruction: "",
            seed: "",
            categoryId: undefined,
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
                    <div className="space-y-2 w-full col-span-2">
                        <div>
                            <h3 className="text-lg font-medium">
                                General Information
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                General information about the companion.
                            </p>
                        </div>
                        <Separator className="bg-primary/10" />
                    </div>

                </form>

            </Form>
        </div>
    )
};