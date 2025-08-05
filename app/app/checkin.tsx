// app/checkin.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CheckInScreen() {
  const [open, setOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState('');

const [clubs, setClubs] = useState([
  // General Clubs
  { label: 'Academic Bowl', value: 'academic_bowl' },
  { label: 'Alzheimer’s Foundation of America Club', value: 'alzheimers_foundation' },
  { label: 'Black Student Union', value: 'black_student_union' },
  { label: 'Brain Bee Club', value: 'brain_bee' },
  { label: 'Book Club', value: 'book_club' },
  { label: 'BETA Club', value: 'beta_club' },
  { label: 'Chess Club', value: 'chess_club' },
  { label: 'Civic Awareness Club', value: 'civic_awareness' },
  { label: 'Creative Writing Club', value: 'creative_writing' },
  { label: 'Cyberpatriot Competition Teams', value: 'cyberpatriot' },
  { label: 'Debate Club', value: 'debate' },
  { label: 'Economics Club', value: 'economics' },
  { label: 'Environmental Club', value: 'environmental_club' },
  { label: 'EvoSol Pediatrics', value: 'evosol_pediatrics' },
  { label: 'FCA (Fellowship of Christian Athletes)', value: 'fca' },
  { label: 'FIRST Robotics Competition', value: 'first_robotics' },
  { label: 'French Club', value: 'french' },
  { label: 'German Club', value: 'german' },
  { label: 'Girls Who Code', value: 'girls_who_code' },
  { label: 'Habitat for Humanity', value: 'habitat_for_humanity' },
  { label: 'High School Alliance of Future Physicians (HSAFP)', value: 'hsafp' },
  { label: 'Improv Club', value: 'improv_club' },
  { label: 'Indian Student Association (ISA)', value: 'isa' },
  { label: 'Interact Club', value: 'interact_club' },
  { label: 'Just One Africa', value: 'just_one_africa' },
  { label: 'Junior Civitan', value: 'junior_civitan' },
  { label: 'Junior Optimist International', value: 'junior_optimist' },
  { label: 'K-pop Club', value: 'kpop_club' },
  { label: 'Logic and Strategy Game Club', value: 'logic_strategy_games' },
  { label: 'Machine Learning Club', value: 'machine_learning_club' },
  { label: 'MD Junior', value: 'md_junior' },
  { label: 'Mock Trial', value: 'mock_trial' },
  { label: 'Model United Nations', value: 'model_un' },
  { label: 'Madhatter Knits Club', value: 'madhatter_knits' },
  { label: 'Muslim Students Association', value: 'msa' },
  { label: 'Optimist Oratorical', value: 'optimist_oratorical' },
  { label: 'Physics Club', value: 'physics' },
  { label: 'Pride Club', value: 'pride_club' },
  { label: 'Red Cross Club', value: 'red_cross_club' },
  { label: 'Science Olympiad', value: 'science_olympiad' },
  { label: 'SEWA', value: 'sewa' },
  { label: 'SFH AI Club', value: 'sfh_ai_club' },
  { label: 'SFH American Computer Science League (ACSL)', value: 'sfh_acsl' },
  { label: 'SFH Coding Club', value: 'sfh_coding_club' },
  { label: 'SFH Hack Club', value: 'sfh_hack_club' },
  { label: 'SFHS Math Team', value: 'math_team' },
  { label: 'SFHS Forensic Science Club', value: 'forensic_science' },
  { label: 'SFHS Gavel Club', value: 'gavel' },
  { label: 'Sikh Student Association', value: 'sikh_student_association' },
  { label: 'SoFo Cornhole Eagle Stars', value: 'cornhole_eagle_stars' },
  { label: 'South Forsyth Equestrian Team', value: 'equestrian_team' },
  { label: 'Southside Dance Co.', value: 'southside_dance' },
  { label: 'Sources of Strength', value: 'sources_of_strength' },
  { label: 'Spanish Club', value: 'spanish' },
  { label: 'Special Olympics', value: 'special_olympics' },
  { label: 'Sports Medicine Club', value: 'sports_medicine' },
  { label: 'Student Ambassadors to the State House of Representatives', value: 'state_ambassadors' },
  { label: 'Student Council', value: 'student_council' },
  { label: 'Technology Student Association (TSA)', value: 'tsa' },
  { label: 'Thespian Society', value: 'thespian_society' },
  { label: 'UNICEF', value: 'unicef' },
  { label: 'VEX Robotics', value: 'vex_robotics' },
  { label: 'Vibha Club', value: 'vibha_club' },
  { label: 'Volunteers in Action', value: 'volunteers_in_action' },
  { label: 'War Eagle Figure Skating Club', value: 'figure_skating' },
  { label: 'WiSTEM (Women in STEM)', value: 'wistem' },
  { label: 'Women’s Student Association', value: 'womens_student_association' },
  { label: 'DECA', value: 'deca' },
  { label: 'FBLA', value: 'fbla' },
  { label: 'FCCLA', value: 'fccla' },
  { label: 'HOSA', value: 'hosa' },
  { label: 'SkillsUSA', value: 'skillsusa' },

  // Honor Societies
  { label: 'French Honors Society', value: 'french_honors' },
  { label: 'Mu Alpha Theta (Math Honor Society)', value: 'mu_alpha_theta' },
  { label: 'National Art Honor Society', value: 'art_honor_society' },
  { label: 'National English Honor Society', value: 'english_honor_society' },
  { label: 'National Honors Society', value: 'national_honors' },
  { label: 'National Latin Honor Society', value: 'latin_honor_society' },
  { label: 'National STEM Honor Society (NSTEM)', value: 'nstem' },
  { label: 'National Technical Honor Society (NTHS)', value: 'nths' },
  { label: 'Psi Alpha (Psychology Honor Society)', value: 'psi_alpha' },
  { label: 'Rho Kappa (Social Studies Honor Society)', value: 'rho_kappa' },
  { label: 'Science National Honor Society', value: 'science_honor_society' },
  { label: 'Spanish National Honor Society', value: 'spanish_nhs' },
  { label: 'Tri-M Music Honor Society', value: 'tri_m_music_honor_society' },
]);

  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!selectedClub || !image) {
      Alert.alert('Incomplete', 'Please select a club and upload a photo.');
      return;
    }
    Alert.alert('Success', 'Check-in submitted!');
    setSelectedClub('');
    setImage(null);
    router.back();
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#fdf6ec', padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', fontFamily: 'PlayfairDisplay_700Bold', textAlign: 'center', marginTop: 20 }}>
        📝 Check In
      </Text>
      <Text style={{ fontSize: 14, fontFamily: 'Inter_400Regular', textAlign: 'center', color: '#444', marginBottom: 30 }}>
        Upload photo proof and select your club
      </Text>

      <Text style={{ fontSize: 16, fontFamily: 'Inter_400Regular', marginBottom: 10 }}>Choose Club</Text>

      <DropDownPicker
        open={open}
        value={selectedClub}
        items={clubs}
        setOpen={setOpen}
        setValue={setSelectedClub}
        setItems={setClubs}
        placeholder="Select a club..."
        style={{
          borderColor: '#ccc',
          borderRadius: 8,
          marginBottom: open ? 180 : 20, // extra space when dropdown is open
        }}
        textStyle={{
          fontFamily: 'Inter_400Regular',
          fontSize: 16,
        }}
        dropDownContainerStyle={{
          borderColor: '#ccc',
        }}
      />

      <TouchableOpacity
        onPress={pickImage}
        style={{
          backgroundColor: '#a1c9f6ff',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 16 }}>Upload Photo Proof</Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: 200, borderRadius: 10, marginBottom: 20 }}
        />
      )}

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: '#4A90E2',
          padding: 14,
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 16, color: '#fff' }}>Submit Check-In</Text>
      </TouchableOpacity>
    </View>
  );
}