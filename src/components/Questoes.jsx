import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native';

export default function Questoes(props) {

    const [q1, setQ1] = useState(-1);
    const [q2, setQ2] = useState(-1);
    const [q3, setQ3] = useState(-1);
    const [q4, setQ4] = useState(-1);
    const [q5, setQ5] = useState(-1);
    const [q6, setQ6] = useState(-1);

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Questoes</Text>
                <View id='Q1'>
                    <Text>Na casa em que você vive com sua família, nos cômodos em que a luzes ficam acesas por mais de 4 horas, as lâmpadas são econômicas (led)? </Text>
                    <CheckBox
                        title={'Sim'}
                        checked={q1 == 1}
                        onPress={() => setQ1(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title={'Não'}
                        checked={q1 == 0}
                        onPress={() => setQ1(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <View id='Q2'>
                    <Text>Pergunta 2 </Text>
                    <CheckBox
                        title={'Sim'}
                        checked={q2 == 1}
                        onPress={() => setQ2(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title={'Não'}
                        checked={q2 == 0}
                        onPress={() => setQ2(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <View id='Q3'>
                    <Text>Pergunta 3? </Text>
                    <CheckBox
                        title={'Sim'}
                        checked={q3 == 1}
                        onPress={() => setQ3(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title={'Não'}
                        checked={q3 == 0}
                        onPress={() => setQ3(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <View id='Q4'>
                    <Text>Pergunta 4? </Text>
                    <CheckBox
                        title={'Sim'}
                        checked={q4 == 1}
                        onPress={() => setQ4(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title={'Não'}
                        checked={q4 == 0}
                        onPress={() => setQ4(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <View id='Q5'>
                    <Text>Pergunta 5? </Text>
                    <CheckBox
                        title={'Sim'}
                        checked={q5 == 1}
                        onPress={() => setQ5(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title={'Não'}
                        checked={q5 == 0}
                        onPress={() => setQ5(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <View id='Q6'>
                    <Text>Pergunta 6? </Text>
                    <CheckBox
                        title={'Sim'}
                        checked={q6 == 1}
                        onPress={() => setQ6(1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title={'Não'}
                        checked={q6 == 0}
                        onPress={() => setQ6(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <Button title='Concluir' 
                        onPress={() => props.navigation.navigate("Feedback", {q1, q2, q3, q4, q5, q6})} />
            </ScrollView>
        </SafeAreaView>
    )
}

