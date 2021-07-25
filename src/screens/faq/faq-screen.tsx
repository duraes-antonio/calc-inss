import React, {memo, useState} from 'react';
import {Text, View, ViewStyle} from 'react-native';
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

function FAQQuestion(props: {
    question: Question;
    opened?: boolean;
    style?: ViewStyle;
}) {
    const [open, setOpen] = useState(!!props.opened);
    return (
        <View style={props.style}>
            <CollapsibleHeader
                activeOpacity={3 / 5}
                open={open}
                onPress={() => setOpen(!open)}>
                <CollapsibleHeaderText>
                    {props.question.title}
                </CollapsibleHeaderText>
            </CollapsibleHeader>
            <Collapsible collapsed={!open}>
                <CollapsibleBody>
                    <CollapsibleBodyText>
                        {props.question.answer}
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
