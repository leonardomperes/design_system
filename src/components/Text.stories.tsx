import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: 'Loren ipsum',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: 'inline-radio'
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }

} as Meta<TextProps>
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}
export const Medium: StoryObj<TextProps> = {
    args: {
        size:'md'
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size:'lg'
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Test with P tag</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
    
}