import { geradorNPC } from "@/service/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';
import { Npc } from "@/models/npc";
import { Link, router } from 'expo-router';
import ListNpcScreen from "./npcList";

var lista: Array<Npc>

const NpcScreen = () => {
  const [prompt, setNPCName] = useState("");
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  {/** 
    Não aceita passar a lista pelo ROUTER
  const trocarTela = () => {
    router.push({ pathname: '/npcList', params: { listaNpc: lista}})
  }
  **/}

  const callNPCName = async () => {
    if (prompt.length < 5) {
      alert("Desculpe, o evento precisa ter mais de 5 caracteres");
      return;
    }

    setIsLoading(true);
    setNPCName("");
    setResposta("");

    try {
      const result = await geradorNPC(prompt);
      setResposta(result);

      const nome: string = resposta.split("**Nome:**", 2).join();
      const descricao: string = resposta.split("**Descrição:**").join();

      let n:Npc = {nome, descricao};
      lista.push(n);

    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>NPC PRA QUE TE QUERO</Text>
      <Text style={styles.subtitulo}>Cansado de ficar sem saber o nome de um NPC quando seus 
        jogadores pedem o nome de um Zé Ninguém qualquer, seus problemas acabaram!</Text>
      <TextInput
        onChangeText={setNPCName}
        value={prompt}
        style={styles.input}
        placeholder="Digite a raça e uma característica do seu NPC ...">
      </TextInput>

      <TouchableOpacity style={styles.button} onPress={callNPCName}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Gerar NPC!"}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonList} onPress={ListNpcScreen (lista)!}>
        <Text style={styles.buttonText}>{"Ver Lista de NPCs!"}</Text>
      {/* Não consegui passar a lista pelo ROUTER */}
      </TouchableOpacity>

      {
        resposta && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <Text style={styles.cardTitle}>NPC criado</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }
    </View>
  );
  
}

export default NpcScreen;