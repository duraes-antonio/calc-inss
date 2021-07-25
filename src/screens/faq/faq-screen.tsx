import React, {memo, useState} from 'react';
import {Linking, Text, View, ViewStyle} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Page from '../../shared/components/page';
import {
    CollapsibleBody,
    CollapsibleBodyText,
    CollapsibleHeader,
    CollapsibleHeaderText,
    questionStyles,
} from './style';
import {Question, questions} from './consts';

const openLinkUrl = async (url: string) => await Linking.openURL(url);

function FAQQuestion(props: {
    question: Question;
    opened?: boolean;
    style?: ViewStyle;
}) {
    const [open, setOpen] = useState(!!props.opened);
    const {link, answer, title} = props.question;
    return (
        <View style={props.style}>
            <CollapsibleHeader
                activeOpacity={3 / 5}
                open={open}
                onPress={() => setOpen(!open)}>
                <CollapsibleHeaderText>{title}</CollapsibleHeaderText>
            </CollapsibleHeader>
            <Collapsible collapsed={!open}>
                <CollapsibleBody
                    onPress={() => (link ? openLinkUrl(answer) : null)}>
                    <CollapsibleBodyText
                        style={link ? questionStyles.answerLink : {}}>
                        {answer}
                    </CollapsibleBodyText>
                </CollapsibleBody>
            </Collapsible>
        </View>
    );
}

function FAQScreen() {
    const indexOpened = 0;
    return (
        <Page>
            <Text style={questionStyles.pageTitle}>Dúvidas</Text>
            {questions.map((q, i) => (
                <FAQQuestion
                    question={q}
                    opened={indexOpened === i}
                    key={i.toString()}
                    style={{marginBottom: i + 1 === questions.length ? 0 : 16}}
                />
            ))}
        </Page>
    );
}

export default memo(FAQScreen);
